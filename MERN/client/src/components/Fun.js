export var  data="";
export var data12=data;


export function update(val)
{
    if(data)
    {
        data="";
        data=val;
    }
    else 
    {
        data=val;
    }

}

export function Del()
{
    
    data="";
    data12="";
}