class Globals{}

class DevelopmentGlobals extends Globals{
    public urls = {
        administrator : "http://localhost:8080/apiAdmin/",
        //administrator : "https://ayal-coupon.herokuapp.com/admin/",
        company : "http://localhost:8080/apiCompany/",
        customer : "http://localhost:8080/apiCustomer/",
        guest : "http://localhost:8080/apiGuest/"
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        administrator : "/apiAdmin/",
        company : "/apiCompany/",
        customer : "/apiCustomer/",
        guest : "/apiGuest/",
        general : "/"
    }
}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;