import Link from 'next/link'
import { useContext, useState } from 'react'
import { ApiContext } from '../../ context/ApiContext'
import {
    FormHeader,
    FormContainer,
    FormInput,
    FormButton,
    FormError,
    LoginRegisterText
} from "../../components/FormControl"
import MarketValidator from '../../helpers/MarketValidator'


export default function AddMarket() {
    const [state, set] = useState({
        name: '',
        open: 0,
        close: 0,
        image: '',
        address: '',
    })
    const [errors, setErrors] = useState({ name: '', address: '', open: '', close: '', image: '' })

    const { addmarket } = useContext(ApiContext)

    async function handleSubmit(e: any) {
        e.preventDefault()
        let { errors, cond } = MarketValidator(state)
        setErrors(errors);
        if (cond) {
            addmarket(state)
        }
    }
    return (
        <FormContainer className="bg-white mx-auto p-4 md:p-8 my-10 rounded-lg shadow-2xl">
            <Link href="/dashboard/markets"><button className="bg-red-300 px-4 py-2 rounded-md border-gray-800 border-2">Go Back</button></Link>
            <FormHeader className="text-xl font-semibold mb-4">Add a market</FormHeader>
            <form className="grid" onSubmit={(e: any) => handleSubmit(e)} noValidate autoComplete="on">
                <FormInput
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Market Name"
                    onChange={(e) => set({ ...state, name: e.target.value })}
                    required
                    error={errors.name}
                    parentProps
                />
                <FormInput
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={(e) => set({ ...state, address: e.target.value })}
                    required
                    error={errors.address}
                    parentProps
                />
                <FormInput
                    id="start"
                    type="number"
                    name="start"
                    placeholder="Start Time"
                    onChange={(e) => set({ ...state, open: parseInt(e.target.value) })}
                    required
                    error={errors.open}
                    parentProps
                />
                <FormInput
                    id="end"
                    type="number"
                    name="end"
                    placeholder="End Time"
                    onChange={(e) => set({ ...state, close: parseInt(e.target.value) })}
                    required
                    error={errors.close}
                    parentProps
                />
                <FormInput
                    id="image"
                    type="text"
                    name="image"
                    placeholder="Market Logo"
                    onChange={(e) => set({ ...state, image: e.target.value })}
                    required
                    error={errors.image}
                    parentProps
                />
                <FormButton style={{ backgroundColor: "#3750FF" }} type="submit">Submit</FormButton>
            </form>
        </FormContainer>
    )
}