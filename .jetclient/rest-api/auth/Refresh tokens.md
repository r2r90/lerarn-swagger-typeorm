```toml
name = 'Refresh tokens'
method = 'POST'
url = '{{baseUrl}}/auth/refresh-tokens'
sortWeight = 2000000
id = 'c866a17e-11f6-4c85-b783-b84e03bb8120'

[auth]
type = 'BEARER'

[body]
type = 'JSON'
raw = '''
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQxLCJpYXQiOjE3Mzc0NTMyMjIsImV4cCI6MTczNzUzOTYyMiwiYXVkIjoibG9jYWxob3N0OjMwMDAiLCJpc3MiOiJsb2NhbGhvc3Q6MzAwMCJ9.EenBreI5OXp2vWF9DnkVBpYISoGsgIbKbHDaPZFtovU"
}'''
```
