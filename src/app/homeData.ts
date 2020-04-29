export class HomePageDataBase{
    midData:any[]=[
    {img:"assets/Tiger.jpg",title:"Tiger",about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis hic libero reprehenderit incidunt reiciendis tempore perferendis vitae, ea, explicabo repellat eum voluptates velit ratione repellendus cupiditate nemo odio eius suscipit sequi, voluptatum dicta? Ipsum atque ab, amet praesentium temporibus dolorem et a distinctio cum! Ipsum deserunt expedita eveniet ex."},
    {img:"assets/Panda.jpg",title:"Panda",about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis hic libero reprehenderit incidunt reiciendis tempore perferendis vitae, ea, explicabo repellat eum voluptates velit ratione repellendus cupiditate nemo odio eius suscipit sequi, voluptatum dicta? Ipsum atque ab, amet praesentium temporibus dolorem et a distinctio cum! Ipsum deserunt expedita eveniet ex."},
    {img:"assets/Bird.jpg",title:"Bird",about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis hic libero reprehenderit incidunt reiciendis tempore perferendis vitae, ea, explicabo repellat eum voluptates velit ratione repellendus cupiditate nemo odio eius suscipit sequi, voluptatum dicta? Ipsum atque ab, amet praesentium temporibus dolorem et a distinctio cum! Ipsum deserunt expedita eveniet ex."},
    {img:"assets/Fish.jpeg",title:"Fish",about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis hic libero reprehenderit incidunt reiciendis tempore perferendis vitae, ea, explicabo repellat eum voluptates velit ratione repellendus cupiditate nemo odio eius suscipit sequi, voluptatum dicta? Ipsum atque ab, amet praesentium temporibus dolorem et a distinctio cum! Ipsum deserunt expedita eveniet ex."}
    ];
    bannerImages:any[]=["url(assets/Forest0.jpg)","url(assets/Forest1.jpg)","url(assets/Forest2.jpg)"];
    getMidData(){
        return this.midData;
    }
    getBanners(){
        return this.bannerImages;
    }
}