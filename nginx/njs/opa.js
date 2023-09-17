async function checkPolicy(r) {

    let opa_data = {
        "input": {
            "user": "foo_bar",
            "path": r.variables['request_uri'],
            "method": r.method
        }
    };

    let opts = {
        method: "POST",
        body: JSON.stringify(opa_data)
    };

    try {
        let reply = await r.subrequest('/_opa', opts)
        let response = JSON.parse(reply.responseText);

        if (response.result) {
            r.return(200);
            return;
        }
        if (response.result === false) {
            r.return(403, "No allow from OPA");
            return;
        }
        r.return(403, "No result from OPA");
    } catch (e) {
        r.error(e)
        r.return(500, e);
    }
}

export default {checkPolicy};