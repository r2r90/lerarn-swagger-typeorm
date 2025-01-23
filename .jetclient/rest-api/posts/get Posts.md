```toml
name = 'get Posts'
method = 'GET'
url = '{{baseUrl}}/posts/?startDate={{startDate}}&endDate={{endDate}}&limit=1&page=2'
sortWeight = 1000000
id = '1c6d7ff3-7cbb-4c54-b402-4ced6d147494'

[[queryParams]]
key = 'startDate'
value = '{{startDate}}'

[[queryParams]]
key = 'endDate'
value = '{{endDate}}'

[[queryParams]]
key = 'limit'
value = '1'

[[queryParams]]
key = 'page'
value = '2'

[auth.bearer]
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQxLCJlbWFpbCI6ImpvaG5AaGFzaGVkLmNvbSIsImlhdCI6MTczNzYzOTQzOSwiZXhwIjoxNzM3NjQzMDM5LCJhdWQiOiJsb2NhbGhvc3Q6MzAwMCIsImlzcyI6ImxvY2FsaG9zdDozMDAwIn0.3BLSACx_HqoarS_5_ZnAF34z9FzWmSe2mxu5-zfzYos'
```

#### Pre-request Script

```js
{
  const date = new Date();
  jc.globals.set("startDate", date.toString());
  jc.globals.set("endDate", date.toString());
}
```
