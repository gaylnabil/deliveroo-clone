import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Name',
      type: 'string',
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
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{
            type: "reference", 
            to: [{
              type:"restaurant"
            }]
          }]
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
