class HashTable{
   size:number;
   table:Array<string|number|undefined>;
   constructor(size:number)
   {
    this.table = new Array(size);
    this.size = size;
   }

   hash(key:string)
   {
    let total  = 0;
    for(let i = 0; i<key.length;i++)
    {
        total += key.charCodeAt(i);
    }
    return total % this.size;
   }

   set(key:string, value:string|number)
   {
    const index = this.hash(key);
    this.table[index] = value;
   }

   get(key:string){
    
    const index = this.hash(key);
    return this.table[index];


   }

   remove(key:string)
   {
    const index = this.hash(key);

    this.table[index] = undefined
   }

   display()
   {
    for(let i = 0 ; i<this.table.length;i++)
    {
        if(this.table[i])
        {
            console.log(i, this.table[i])
        }
    }
   }
}


const table = new HashTable(10);


table.set("name", "bruce");
table.set("age", 25);
table.display()


console.log(table.get("age"))
table.remove("name")
table.display()