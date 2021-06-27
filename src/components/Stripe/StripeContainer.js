import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js"
import PaymentForm from './PaymentForm'



const PUBLIC_KEY = "pk_test_51HDS5rGlWmdDdvG93KgdCPaBSlDtr2i0AYxSN4hHHzT7cfquvYt8U3KnvtGH7dL2P4R7PhGDcdl7hxquXTsOKaHE00r5I49952"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}
