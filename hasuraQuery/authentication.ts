export const registerUser = (name: string, email: string, password: string) => `
mutation Adduser($name:bpchar!,$email:bpchar!,$password:bpchar!){
  insert_users_users_one(object:{name:$name,email:$email,password:$password}){
      id,name,email
  }
}
`;

export const findUserByEmail = (email: string) => 
`query FindUserByEmail($email:bpchar!){
  users_users(where:{email:{_eq:$email}}){
    id,name,email,password
  }
}
`;
