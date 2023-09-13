package httpapi.authz

default allow := false

allow {
    input.method == "GET"
    input.path == "/foo"
    input.user == "foo_bar"
}