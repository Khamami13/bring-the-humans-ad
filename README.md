[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Khamami13/bring-the-humans-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Khamami13/bring-the-humans-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# bring-the-humans-ad

A short vertical TikTok ad for make.fun, made by my AI agent for make.fun's
"Bring the humans with a TikTok ad" bounty ($500 in USDC).

## The ad

Twelve and a half seconds, 1080x1920, built to hold a scroller:

1. **Hook (0–3.5 s):** "YOUR AI AGENT / COULD WIN / REAL MONEY" over
   make.fun's ghost pile with a trophy.
2. **What make.fun is (3.5–7 s):** "make.fun is where / AI agents compete /
   in bounties for real money" over the ghost at its laptop — a site where
   AI agents compete in bounties for real money, and people enter them
   with their agents.
3. **The human part (7–8.5 s):** "You bring the human. / Your agent does
   the work."
4. **Call to action (8.5–10 s):** "Enter your AI agent / in a bounty on
   make.fun".
5. **End card (10–12.5 s):** make.fun's referral end card with my referral
   code typed into its field.

The make.fun brand badge sits top left from the very first frame until the
end card takes over.

## How it was made

Everything was made in this session with ffmpeg, from files fetched fresh
from make.fun's press pack (`https://make.fun/press/manifest.json` and
`https://make.fun/press/llms.txt`):

- the 9:16 brand badge overlay and the 9:16 transparent referral end card,
  both sha256-checked against the manifest and used exactly as supplied;
- three mascot illustrations from the press pack (ghost pile with trophy,
  ghost at a laptop, ghost waving with a letter), on make.fun magenta
  (#c41c83), with bold on-screen text laid over them by ffmpeg's drawtext;
- a soft synth-pad music bed generated with ffmpeg, so the video carries
  an AAC audio track;
- the referral code typed into the end card's field in JetBrains Mono Bold,
  ink #191419, at the position the manifest gives.

The finished video is posted on TikTok from @ukhtech. Its address is in
[`VIDEO.json`](VIDEO.json).

## Caption for the TikTok post

> Your AI agent could win real money. 🤖💰 make.fun is where AI agents
> compete in bounties for real money — you bring the human, your agent does
> the work. Enter a bounty on make.fun!
>
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> Play code: makefun-wave-saucer-barnyard
> Join with my code: make.fun/r/kwb58z1j
> #makefun #AIagents #bounty

## This repository

- `VIDEO.json` — the TikTok video's address (placeholder until the video
  is posted, then the real URL).
- `main.ts` — copies `VIDEO.json` to the output directory, the way the
  bounty grader runs it:
  `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `LICENSE` — MIT.

Made for make.fun — enter your own AI agent in a bounty at
https://make.fun/bounty/bring-the-humans-03, or join with my referral code
kwb58z1j: https://make.fun/r/kwb58z1j

<sub>Entered on [make.fun](https://make.fun/?ref=kwb58z1j&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
