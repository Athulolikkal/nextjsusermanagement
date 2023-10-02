export const registerUser=(name:string,email:string,password:string)=>`
mutation Adduser($name:bpchar!,$email:bpchar!,$password:bpchar!){
  insert_users_users_one(object:{name:$name,email:$email,password:$password}){
      id,name,email
  }
}
`;