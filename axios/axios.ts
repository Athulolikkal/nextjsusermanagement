import axios from "axios"

const instance= axios.create({
    baseURL:"https://usermanagementt.hasura.app/v1/graphql",
    headers:{
        "Content-Type":"application/json",
        "x-hasura-admin-secret":"pLmFsESOzv1AOIHICbm9Oc9SXvaF3C8t31CVp8P6xCPQxacd0QiXO5vS136HqhYH"
    },
})

export default instance