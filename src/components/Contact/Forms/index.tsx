import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto: antoniomarcos.amrrds@gmail.com?subject=${formData.subject}&body=Olá, Meu Nome e ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full min-w-0 max-w-md mx-auto p-5 space-y-4 bg-black rounded-lg shadow-md"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          {...register('name')}
          placeholder="Name"
          className="contact-input"
          type="text"
        />
        <input
          {...register('email')}
          placeholder="Email"
          className="contact-input"
          type="email"
        />
      </div>

      <input
        {...register('subject')}
        placeholder="Subject"
        className="contact-input"
        type="text"
      />

      <textarea
        {...register('message')}
        placeholder="Message"
        className="contact-input"
      />

      <button
        type="submit"
        className="bg-bluishGreen py-2 rounded-full text-black font-bold text-lg w-full font-brunoAceSc"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
