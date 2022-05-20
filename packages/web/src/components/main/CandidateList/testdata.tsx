import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { User } from './User'

export const data = [
  {
    role: 'Ui Designer',
    status: 'reviewing',
    id: '1',
    user: {
      image:
        'https://cdn.discordapp.com/emojis/660475159752343552.webp?size=100&quality=lossless',
      name: 'Murat Ahmed',
      email: 'murat@example.com',
    },
  },
  {
    role: 'Ui Designer',
    status: 'declined',
    id: '2',
    user: {
      image:
        'https://cdn.discordapp.com/emojis/719199148917915659.webp?size=100&quality=lossless',
      name: 'Murat Ahmed',
      email: 'murat@example.com',
    },
  },
  {
    role: 'Back-End Developer',
    status: 'employed',
    id: '3',
    user: {
      image:
        'https://cdn.discordapp.com/emojis/778318920641413190.webp?size=100&quality=lossless',
      name: 'Murat Ahmed',
      email: 'murat@example.com',
    },
  },
  {
    role: 'Full Stack Developer',
    status: 'employed',
    id: '4',
    user: {
      image:
        'https://cdn.discordapp.com/emojis/776761035994300427.webp?size=100&quality=lossless',
      name: 'Murat Ahmed',
      email: 'murat@example.com',
    },
  },
  {
    role: 'Ui Designer',
    status: 'reviewing',
    id: '5',
    user: {
      image:
        'https://cdn.discordapp.com/emojis/660475159752343552.webp?size=100&quality=lossless',
      name: 'Murat Ahmed',
      email: 'murat@example.com',
    },
  },
  {
    role: 'Ui Designer',
    status: 'reviewing',
    id: '6',
    user: {
      image:
        'https://cdn.discordapp.com/emojis/660475159752343552.webp?size=100&quality=lossless',
      name: 'Murat Ahmed',
      email: 'murat@example.com',
    },
  },
  {
    role: 'Ui Designer',
    status: 'reviewing',
    id: '7',
    user: {
      image:
        'https://cdn.discordapp.com/emojis/660475159752343552.webp?size=100&quality=lossless',
      name: 'Murat Ahmed',
      email: 'murat@example.com',
    },
  },
  {
    role: 'Ui Designer',
    status: 'reviewing',
    id: '8',
    user: {
      image:
        'https://cdn.discordapp.com/emojis/660475159752343552.webp?size=100&quality=lossless',
      name: 'Murat Ahmed',
      email: 'murat@example.com',
    },
  },
]

const badgeEnum: Record<string, string> = {
  employed: 'green',
  reviewing: 'orange',
  declined: 'red',
}

export const columns = [
  {
    Header: 'Candidate',
    accessor: 'user',
    Cell: function MemberCell(data: any) {
      return <User data={data} />
    },
  },
  {
    Header: 'Job',
    accessor: 'role',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: function StatusCell(data: any) {
      return (
        <Badge fontSize="xs" colorScheme={badgeEnum[data]}>
          {data}
        </Badge>
      )
    },
  },

]
