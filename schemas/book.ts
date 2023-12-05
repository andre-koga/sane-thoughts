export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Finished', value: 'finished'},
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Paused', value: 'paused'},
        ],
        layout: 'radio', // display as radio buttons
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'preface',
      type: 'array',
      title: 'Preface',
      of: [{type: 'block'}],
    },
    {
      name: 'pages',
      type: 'array',
      title: 'Pages',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}],
        },
      ],
    },
  ],
}
