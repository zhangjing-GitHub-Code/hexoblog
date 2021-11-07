---
title: Hello-Typorld
mathjax: true
tags: 
- 测试
date: 2021-09-22 10:15:20
---
## What !?

The document was created by Typora.  

__*HeLlO*__ $KaTeX is GOOOGDdd \cfrac{114}{514}$

```c++
//过河卒
#include <cstdio>
#include <iostream>
#include <algorithm>
typedef int tni;
using namespace std;
#define intl long long
int main(){
  intl RC[50][50]={0},bl[50][50]={0},R,C,hx,hy,m,n;
  scanf("%ld%ld%ld%ld",&n,&m,&hx,&hy);
  n+=2;
  m+=2;
  RC[2][2]=1;
  hx+=2;
  hy+=2;
  bl[hx][hy]=1;
  bl[hx-2][hy-1]=1;
  bl[hx-1][hy-2]=1;
  bl[hx+1][hy-2]=1;
  bl[hx-2][hy+1]=1;
  bl[hx+2][hy+1]=1;
  bl[hx+1][hy+2]=1;
  bl[hx-1][hy+2]=1;
  bl[hx+2][hy-1]=1;
  /*for(int i=0;i<=8;i++)
		bl[fx[i]+hx][fy[i]+hy]=1;*/
  for (int i=2;i<=n;i++){
    for (int j=2;j<=m;j++){
      if (bl[i][j]==1){
        continue;
      }
      RC[i][j]=max(RC[i][j],RC[i-1][j]+RC[i][j-1]);
    }
  }
  printf("%ld",RC[n][m]);
  return 0;
}
```



