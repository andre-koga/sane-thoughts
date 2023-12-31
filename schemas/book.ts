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
          {title: 'Paused', value: 'paused'},
          {title: 'Ongoing', value: 'ongoing'},
        ],
        layout: 'radio', // display as radio buttons
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
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
