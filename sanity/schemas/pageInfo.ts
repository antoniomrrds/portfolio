import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options :{
        hotspot:true,
      },
    }),
    defineField({
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string',
    }),
    defineField({
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options :{
        hotspot:true,
      },
    }),
    defineField({
      name: 'email',
      title: 'email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'address',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'socials',
      type: 'array',
      of: [{
        type:"reference",
        to:{
          type:"social"
        }}],
    }),
  ],

})
