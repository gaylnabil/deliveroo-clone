import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation:(rule) =>{
          return rule.required();
      },
    }),
    defineField({
      name: 'image',
      title: 'Restaurant Image URL',
      type: 'image',
      validation:(rule) =>{
        return rule.required();
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Maximum Characters (500)',
      validation:(rule) =>{
        return rule.max(500);
      },
    }),

    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation:(rule) =>{
        return rule.required()
                   .min(1)
                   .max(5)
                   .error("error: Enter the number between 1 and 5!");
      },
    }),

    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'string',
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      description: 'Maximum Characters (200)',
      validation:(rule) =>{
        return rule.max(200);
      },
    }),

    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of : [{
        type: "reference",
        to: [{type: "dish",}]
      }],
    }),
    
    defineField({
      name: 'latitude',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),

    defineField({
      name: 'longitude',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),


    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{
        type: "category",
      }],
      validation: (rule)=>{
        return rule.required()
      }
    }),

    
  ],
})