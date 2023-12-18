h, m = map(int, input().split())
m -= 45
if (m < 0):
  h -= 1
  m = 60 + m
  if(h == -1):
    h = 23
print(h, m)