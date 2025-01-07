```toml
name = 'update post'
method = 'PATCH'
url = '{{baseUrl}}/posts'
sortWeight = 3000000
id = '43c91e55-7d06-4a80-a788-4aba46fc709e'

[body]
type = 'JSON'
raw = '''
{
  "id": 1111,
 "postType": "post"
}'''
```
