```toml
name = 'create post'
method = 'POST'
url = '{{baseUrl}}/posts'
sortWeight = 2000000
id = '80b3581a-e1c2-4300-a33d-4de90e9d1f52'

[auth.bearer]
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQxLCJlbWFpbCI6ImpvaG5AaGFzaGVkLmNvbSIsImlhdCI6MTczNzM2OTI2NiwiZXhwIjoxNzM3MzcyODY2LCJhdWQiOiJsb2NhbGhvc3Q6MzAwMCIsImlzcyI6ImxvY2FsaG9zdDozMDAwIn0.BwN3Ki53_4_EKU1mQsu5f20QaloPpIbdYrBLFewzmfY'

[body]
type = 'JSON'
raw = '''
{
  "title": "Testqdsdqs Test 112",
  "postType": "post",
  "slug": "another-pzzsaad-11",
  "status": "draft",
  "content": "test content",
  "schema": "{\r\n \"@context\": \"https:\/\/schema.org\", \r\n \"@type\": \"Person\"\r\n}",
  "featuredImageUrl": "http://localhost.com/images/image-1.jpg",
  "publishOn": "2024-03-16T07:46:32+0000",
  "metaOptions": {
    "metaValue": "{\"sidebarEnabled\":true, \"footerActive\":true}"
  },
  "tags": [
    1,
  ]
}'''
```
