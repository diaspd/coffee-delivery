import { useFormContext } from 'react-hook-form'
import { FormInput, LabelComponent, LastInputs, Container } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function DeliveryForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <Container>
      <div>
        <LabelComponent htmlFor="cep">CEP</LabelComponent>
        <FormInput
          id="cep"
          className="cep"
          placeholder="CEP"
          {...register('cep')}
        />
        <p>{!!errors && errors.cep?.message}</p>
      </div>
      <div>
        <LabelComponent htmlFor="street">Rua</LabelComponent>
        <FormInput
          type="text"
          id="street"
          placeholder="Rua"
          {...register('street')}
        />
        <p>{!!errors && errors.street?.message}</p>
      </div>
      <LastInputs>
        <LabelComponent htmlFor="number">Número</LabelComponent>
        <FormInput
          type="number"
          id="number"
          placeholder="Número"
          {...register('number')}
        />
        <p>{!!errors && errors.number?.message}</p>

        <LabelComponent htmlFor="complement">Complemento</LabelComponent>
        <FormInput
          type="number"
          id="complement"
          placeholder="Complemento       *opcional"
          maxLength={4}
          {...register('complement')}
        />
        <p>{!!errors && errors.complement?.message}</p>
      </LastInputs>
      <LastInputs>
        <LabelComponent htmlFor="neighborhood">Bairro</LabelComponent>
        <FormInput
          type="text"
          id="neighborhood"
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <p>{!!errors && errors.neighborhood?.message}</p>

        <LabelComponent htmlFor="city">Cidade</LabelComponent>
        <FormInput
          type="text"
          id="city"
          placeholder="Cidade"
          {...register('city')}
        />
        <p>{!!errors && errors.city?.message}</p>

        <LabelComponent htmlFor="state">UF</LabelComponent>
        <FormInput
          type="text"
          id="state"
          placeholder="UF"
          {...register('state')}
        />
        <p>{!!errors && errors.state?.message}</p>
      </LastInputs>
    </Container>
  )
}
