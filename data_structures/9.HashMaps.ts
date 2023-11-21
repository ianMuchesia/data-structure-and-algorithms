
class HashTable{
    size:number;
    table: Array<Array<[string, string | number]>|undefined>;

    constructor(size:number)
    {
        this.table = new Array(size);
        this.size = size;
    }


    hash(key:string)
    {
        let total = 0;
        for(let i = 0; i<key.length;i++)
        {
            total += key.charCodeAt(i);
     
        }
     

        return total % this.size;

    }

    set(key:string,value:string|number)
    {
        const index = this.hash(key)

        let bucket = this.table[index];




        if(!bucket){
           
            this.table[index] = [[key,value]];
        }else{
            const sameKeyItem = bucket.find(item=>item[0]=== key);
            if(sameKeyItem)
            {
                sameKeyItem[1] = value;
            }else{
                bucket.push([key,value])
            }
        }


       
    }

    get(key:string)
    {
        const index = this.hash(key);

        let bucket = this.table[index];

        if (bucket) {
            const item = bucket.find(item => item[0] === key);

     
            return item ? item[1] : undefined;
          }
        
          return undefined;

    }

    remove(key:string){
        const index = this.hash(key);
        const bucket = this.table[index];

        if(bucket)
        {
            const sameKeyItem = bucket.find(item=>item[0] === key)

            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }

    

    display()
    {
        for(let i = 0; i<this.table.length;i++)
        {
            if(this.table[i])
            {
                console.log(i, this.table[i])
            }
        }
    }
}


const table = new HashTable(50)
table.set("name","bruce")
table.set("mane","bruce")
table.set("city","nai")
 table.remove("name")
console.log( table.get("mane"))
//table.display()


export {}