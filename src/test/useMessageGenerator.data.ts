export const template = [
  {
    message: ' Hello, ',
    key: 1689434427273,
    condition: {
      variable: '{firstname}',
      success: [
        {
          message: '{firstname}',
          key: 1689434454807,
          condition: {
            variable: '{lastname}',
            success: [
              {
                message: ' {lastname}',
                key: 1689498009755,
              },
            ],
            fail: [
              {
                message: '',
                key: 1689498009755,
              },
            ],
          },
        },
        {
          message: '! ',
          key: 1689498009755,
        },
      ],
      fail: [
        {
          message: 'world!',
          key: 1689434454807,
        },
      ],
    },
  },
  {
    message: ' Our company ',
    key: 1689434454807,
    condition: {
      variable: '{company}',
      success: [
        {
          message: '{company} ',
          key: 1689500957718,
        },
      ],
      fail: [
        {
          message: '',
          key: 1689500957718,
        },
      ],
    },
  },
  {
    message: 'offers you a job as a ',
    key: 1689500957718,
    condition: {
      variable: '{position}',
      success: [
        {
          message: '{position}',
          key: 1689501365532,
        },
      ],
      fail: [
        {
          message: 'cleaner',
          key: 1689501365532,
        },
      ],
    },
  },
  {
    message: '!\n\nAnd goodbye, ',
    key: 1689501365532,
    condition: {
      variable: '{firstname}',
      success: [
        {
          message: '{firstname}',
          key: 1689500631739,
          condition: {
            variable: '{lastname}',
            success: [
              {
                message: ' {lastname}',
                key: 1689500651451,
              },
            ],
            fail: [
              {
                message: '',
                key: 1689500651451,
              },
            ],
          },
        },
        {
          message: '',
          key: 1689500651451,
        },
      ],
      fail: [
        {
          message: 'world',
          key: 1689500631739,
        },
      ],
    },
  },
  {
    message: '!',
    key: 1689500631739,
  },
];
