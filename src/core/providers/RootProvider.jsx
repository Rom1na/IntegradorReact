import AuthProvider from "../auth/provider/AuthProvider";

const RootProvider = ({children}) =>{
    return <AuthProvider>{children}</AuthProvider>;

};

export default RootProvider;
