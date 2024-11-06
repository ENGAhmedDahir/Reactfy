import { useState } from "react";

const Payment = ()=>{

    const intialPayment = {
        evc: false,
        sahal: false,
        zaad : false
    }
    const [paymentMethod , setPaymentMethod]= useState (intialPayment);

    return(


        <div>
        <h2>Pay with</h2>
        <div className="payment-cards">
            <div className={`payment-card ${paymentMethod.zaad && "selected"}` }
            onClick={()=>setPaymentMethod({...intialPayment , zaad : true})}
            >
                <h3>Zaad service</h3>
            </div>
            <div className={`payment-card  ${paymentMethod.evc && "selected"}`}
            onClick={()=>setPaymentMethod({...intialPayment , evc:true})}
            >
                <h3>Evc Plus</h3>
            </div>
            <div className={`payment-card  ${paymentMethod.sahal && "selected"}`}
            onClick={()=>setPaymentMethod({...intialPayment , sahal:true})}
            >
                <h3>Sahal</h3>
            </div>

        </div>
        <form>
            <input type="text" placeholder="2526..."  className="form-control" />
            <button className="btn-proceed" >proceed!</button>
        </form>
    </div>
    )
}

export default Payment;