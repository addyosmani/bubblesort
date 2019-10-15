#include <iostream>
#include <stdio.h>
using namespace std;
int main (){    

int x[4][4],i,k,j;
for(i=0;i<4;i++)
    for(j=0;j<4;j++)
        cin>>x[i][j];

cout<<"\n\n";

for(i=0;i<4;i++)
    for(j=0;j<3;j++)
        for(k=j+1;k<4;k++)
            if(x[i][j]>x[i][k])
            {
                int temp = x[i][j];
                x[i][j] = x[i][k];
                x[i][k] = temp;
            }           

for(i=0;i<4;i++)
    {
    for(j=0;j<4;j++)
        cout<<x[i][j]<<"\t";
        cout<<"\n\n";       
    }


cout<<endl;
return 0;
}
