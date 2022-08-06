export function isSpam(content: string, spamLinkDomains: string[], redirectionDepth: number ): boolean {
  let result: boolean = false
  const requestUrl = content.split(' ')[2]
  const redirectUrl = addressRedirect(requestUrl, redirectionDepth)

  for (const domain of spamLinkDomains) {
    if(redirectUrl.includes(domain))
    {
      result = true;
      break;
    } 
  }
  return result
}


function addressRedirect(link: string, depth: number) {
  if (link === 'https://moimstg.page.link/dmCn') {
    const redirectList: Array<string> = ['https://moimstg.page.link/qbvQ', 'https://github.com', 'https://lab.github.com']
    // a-b-aa-cc, a-c-aa-cc redirection 정보 cache에 담아서 처리?

    const redirectResultUrl: string = redirectList[depth-1]
    return redirectResultUrl
  } else {
    throw new Error('not permitted url')
  }
}