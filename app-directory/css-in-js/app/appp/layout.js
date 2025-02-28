import { Page } from '@vercel/examples-ui'
import Providers from './providers'

const RootLayout = ({ children }) => (
  <Page className="flex flex-col gap-6">
    <Providers>{children}</Providers>
  </Page>
)

export default RootLayout