import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative']
      }
    },
    releaseDate: {
      control: 'date'
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <GameDetails {...args} />
)
