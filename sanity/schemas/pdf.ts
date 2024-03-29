import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pdf',
  title: 'PDF',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      validation: (Rule) => Rule.required(),
      options: {
        accept: 'application/pdf',
      },
    }),
    defineField({
      name: 'fileName',
      title: 'File Name',
      type: 'string',
      description: 'Enter the name of the PDF file. If left empty, the file name will be autogenerated.',
    }),
  ],
});
