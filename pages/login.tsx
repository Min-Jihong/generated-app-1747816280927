import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from '@shadcn/ui'
import { motion } from 'framer-motion'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex flex-col items-center justify-center min-h-screen'
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-1 gap-4'
      >
        <Input
          {...register('email', { required: true })}
          placeholder='Email'
          type='email'
        />
        {errors.email && <span>This field is required</span>}

        <Input
          {...register('password', { required: true })}
          placeholder='Password'
          type='password'
        />
        {errors.password && <span>This field is required</span>}

        <Button type='submit'>Login</Button>
      </form>
    </motion.div>
  )
}