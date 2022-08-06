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
    const redirectResultUrl: string = redirectList[depth-1]
    return redirectResultUrl
  } else {
    throw new Error('not permitted url')
  }
}


console.log(isSpam("spam spam https://moimstg.page.link/dmCn", ["lab.github.com"], 1))
console.log(isSpam("spam spam https://moimstg.page.link/dmCn", ["moimstg.page.link"], 1))
console.log(isSpam("spam spam https://moimstg.page.link/dmCn", ["github.com"], 2))
console.log(isSpam("spam spam https://moimstg.page.link/dmCn", ["lab.github.com"], 2))
console.log(isSpam("spam spam https://moimstg.page.link/dmCn", ["lab.github.com"], 3))