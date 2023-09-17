package httpapi.authz

default allow := false

allow {
    input.method == "GET"
    startswith(input.uri, "/foo")
    input.user == "foo_bar"
}