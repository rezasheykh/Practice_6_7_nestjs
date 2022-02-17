import { registerAs } from "@nestjs/config";

export default registerAs('interseptor',()=>{
    return {
        timeout:process.env.TIMEOUT,
    }
})