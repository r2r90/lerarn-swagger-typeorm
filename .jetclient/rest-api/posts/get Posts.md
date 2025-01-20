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
```

#### Pre-request Script

```js
{
  const date = new Date();
  jc.globals.set("startDate", date.toString());
  jc.globals.set("endDate", date.toString());
}
```
