import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (rule)=>{
        return rule.required()
      }
    }),
    defineField({
      name: 'image',
      title: 'Dish Image',
      type: 'image',
      validation: (rule)=>{
        return rule.required()
      }
    }),
    

    defineField({
      name: 'description', 
      title: 'Description', 
      type: 'text',
      description: 'Maximum Characters (500)',
      validation: (rule)=>{
        return rule.max(500)
      }
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
  ],
})
