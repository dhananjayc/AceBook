const userData = [{
  "id":1,
  "name":"Arun gupta",
  "email":"arungupta3810@gmail.com",
  "gender":"Male",
  "password":"Pass@123",
  "profilePicture":"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
},
{
  "id":2,
  "name":"Anand Raj",
  "email":"anandraj@gmail.com",
  "gender":"Male",
  "password":"Pass@1234",
  "profilePicture":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
}];

const postData = [
    {
        likes:23,
        reaction:2,
        comments:{
          count:2,
          comment1:"Nice picture",
          comment2:"Woww"
        },
        profileName:"Anand Raj",
        profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        status:" It's my first post guys cheer me up ...",
        postPicture:"https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=1024x1024&w=is&k=20&c=ROR_qpj-XI_RBFyI68FlNF9MiwGdXMSE-sOXv7Pb-r4=",
        
      },
      {
        likes:3,
        reaction:2,
        comments:{
          count:2,
          comment1:"Nice picture",
          comment2:"Woww"
        },
        profileName:"Ajay Kumar Singh",
        profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        status:" It's my first post guys cheer me up ...",
        postPicture:"https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
        
      },
      {
        likes:13,
        reaction:2,
        comments:{
          count:2,
          comment1:"Nice picture",
          comment2:"Woww"
        },
        profileName:"Jana bai",
        profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        status:" It's my first post guys cheer me up ...",
        postPicture:"https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
        
      },
      {
        likes:29,
        reaction:2,
        comments:{
          count:2,
          comment1:"Nice picture",
          comment2:"Woww"
        },
        profileName:"Pankaj Gupta",
        profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        status:" It's my first post guys cheer me up ...",
        postPicture:"https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg",
        
      },
      {
        likes:15,
        reaction:2,
        comments:{
          count:2,
          comment1:"Nice picture",
          comment2:"Woww"
        },
        profileName:"Raju Srivastava",
        profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        status:" It's my first post guys cheer me up ...",
        postPicture:"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
        
      }
];

const friendlistData = [
  {
      close:"true",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Arun Gupta",
    },
    {
      close:"true",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Jana bai",
    },
    {
      close:"true",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Anand",
    },
    {
      close:"true",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Anand Raj",
    },
    {
      close:"true",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Ajay Kumar",
    }
    ,{
      close:"false",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Aruna Jahan",
    },
    {
      close:"false",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Jana Shirke",
    },
    {
      close:"false",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Parmanand",
    },
    {
      close:"false",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Anand Singh",
    },
    {
      close:"false",
      profilePic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
      friendName: "Ajay Jaiswal",
    }
];

export {
  userData,       // users set of data
  postData,       // users posts data
  friendlistData, // users friend list data
}