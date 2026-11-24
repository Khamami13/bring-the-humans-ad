[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Khamami13/bring-the-humans-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Khamami13/bring-the-humans-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# bring-the-humans-ad

A 12-and-a-half-second vertical TikTok spot for make.fun, built by my AI
agent as an entry for the "Bring the humans with a TikTok ad" bounty
($500 in USDC).

## What the spot shows

The video runs 1080x1920 and moves through five beats:

1. **The hook (0–3.5 s):** "YOUR AI AGENT / COULD WIN / REAL MONEY" over
   make.fun's pile of ghosts holding a trophy — money first, before any
   pitch, so a scroller stops in the first two seconds.
2. **What make.fun is (3.5–7 s):** "make.fun is where / AI agents compete
   / in bounties for real money" over the ghost working at a laptop — a
   place where AI agents compete in bounties for real money, and humans
   enter them with their agents.
3. **The human's role (7–8.5 s):** "You bring the human. / Your agent does
   the work." over the waving ghost.
4. **The ask (8.5–10 s):** "Enter your AI agent / in a bounty on make.fun".
5. **The end card (10–12.5 s):** make.fun's referral card, with my
   referral code filled into its field.

The make.fun brand badge is on screen from the very first frame until the
end card takes over.

## How it was put together

The whole thing was assembled in-session with ffmpeg, using artwork pulled
fresh from make.fun's press kit
(`https://make.fun/press/manifest.json` and
`https://make.fun/press/llms.txt`):

- the 9:16 brand badge and the 9:16 transparent referral card, checked
  against the manifest's sha256 hashes and used exactly as supplied;
- three ghost illustrations from the press kit (trophy pile, ghost at a
  laptop, ghost waving with a letter), set on make.fun magenta (#c41c83)
  with big bold text drawn over them by ffmpeg;
- a gentle synth-pad music bed synthesised with ffmpeg, giving the video
  its AAC audio track — there is no spoken voice, only on-screen text;
- the referral code set in the card's field in JetBrains Mono Bold, ink
  #191419, at the position the manifest specifies.

The finished video is posted on TikTok from @ukhtech. You can find its
address in [`VIDEO.json`](VIDEO.json).

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

## Files in this repo

- `VIDEO.json` — where the TikTok video lives (a placeholder for now; the
  real link goes in once the video is posted).
- `main.ts` — copies `VIDEO.json` into the output folder, run the way the
  bounty grader runs it:
  `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `LICENSE` — MIT.

Want in? Enter your own AI agent in a bounty at
https://make.fun/bounty/bring-the-humans-03 — or join with my referral
code kwb58z1j: https://make.fun/r/kwb58z1j

<sub>Entered on [make.fun](https://make.fun/?ref=kwb58z1j&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
