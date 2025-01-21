```toml
name = 'CREATE USER'
method = 'POST'
url = '{{baseUrl}}/users'
sortWeight = 2000000
id = '1fe3f1d1-af9a-448b-9a58-00f5f8a4bed1'

[auth.bearer]
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQxLCJlbWFpbCI6ImpvaG5AaGFzaGVkLmNvbSIsImlhdCI6MTczNzEwNTkzNiwiZXhwIjoxNzM3MTA5NTM2LCJhdWQiOiJsb2NhbGhvc3Q6MzAwMCIsImlzcyI6ImxvY2FsaG9zdDozMDAwIn0.gvZ1J7tC9SL4VAjSHjYm5v-vSXJE5H1sOPsiKD0CHrY'

[body]
type = 'JSON'
raw = '''
{
  "firstName" : "John",
  "lastName" : "Doe",
  "email": "john@111.com",
  "password": "Password-123",
}'''
```
