module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'tree',
    icon: 'fa fa-files-o',
    name: 'Categories',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Add new',
        router: {
          name:'newCategory'
        }
       } ,
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'view all',
        router: {
          name : 'indexCategories'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-files-o',
    name: 'Posts',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Add new',
        router: {
          name:'newPost'
        }
       } ,
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'view all',
        router: {
          name : 'indexPosts'
        },
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'featured posts',
        router: {
          name : 'featuredposts'
        },
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-files-o',
    name: 'Tags',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Add tag',
        router: {
          name:'newTag'
        }
       } ,
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'view all',
        router: {
          name : 'indexTags'
        }
      }
    ]
  }
]
