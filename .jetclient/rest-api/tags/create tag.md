```toml
name = 'create tag'
method = 'POST'
url = '{{baseUrl}}/tags'
sortWeight = 1000000
id = '4baedc57-8be0-4dde-a2d2-e5e352c6dc9a'

[body]
type = 'JSON'
raw = '''
{
  "name": "softdelete",
  "slug": "softdelete",
  "description": "All posts softdelete"
}'''
```
