# nginx and Open Policy Agent

Example how to use nginx as reverse proxy/gateway for a backend and use [OPA](https://www.openpolicyagent.org) to validate access.
It uses the [njs](https://nginx.org/en/docs/njs/) scripting engine to send requests to the open policy agent.

The application comes as docker compose example. It should be runnable on all environments with docker compose.
In `requests.rest` some test requests are shown.

In case we are not allowed to access the backend, HTTP 403 (forbidden) is returned.

## Files
### opa/rbac.rego
Definition of a sample policy for OPA. It uses a fixed userID.

### nginx/nginx.conf
Main configuration file for nginx.

### nginx/conf.d/upstreamOpa.conf
nginx configuration file defining the locations to be proxied.
Also the authorization part is configured here.

### nginx/njs/ops.js
njs Javascript file for accessing OPA. The needed request data is created here.

## Disclaimer
This es an example. Take it as example and build your own configuration (e.g. proper error pages).