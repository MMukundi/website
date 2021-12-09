## Who's in the room?

As a solo developer, I have been able to get through much of my career without considering the impact of disparity in the software engineering community.

<!-- Depending on what project I end up working on, -->

Unfortunately, this is more due to blissful ignorance; see, even if I haven't had to meaningfully engage with workplace bias, any tools, pre-trained algorithms, documentation, and any other part of my workflow that I use will be, for better or worse, informed by the working culture where they were produced.

It's time to crack the seal then

> ### What's the deal with the software development industry?

To start, we have to acknowledge the path to the industry is already fraught all on its own. See, much of the advice for how to get into software development encourages rigorous self-study and work outside of work. This means, however, that the digital divide will rear its ugly head here; with 24 million Americans
with insufficient access[^1], this path has a significant roadblock, with this divide most pronounced for low-income families.

With the costs of devices using this technology skyrocketing (see $1,000 phones), this means that many may not even get a chance to interact with this technology.

Unfortunately, this doesn't shield them from the effects these systems will have on their lives. With overn many scenarios (surveillance and crime specifically), you may not even be aware computer vision is being used at all! As such, as mentioned, its important to take a look at the system

Now let's look at a quick overview provided with data from the Bureau of Labor Statistics
According to Zippia[^2] (Cross referenced with raw BLS data), a typical developer:

- Is male (67%)
- Is white(53.9%)
- Is over 40 years old (46%)
- Has (at least) a Bachelor's degree (93%)
  - For associate's degrees, this figure is 97%!!

What does this tell us?

Well first, with a college degree essentially a pseudo-requirement for the field, this just places another financial roadblock in the way of aspiring developers.

In general though, it just means there are more opportunities for a perspective to slip through the cracks; namely those of those 'not in the room'.

An example, from one of the videos I mentioned earlier (seen here:)

<iframe width="560" height="315" src="https://www.youtube.com/embed/7W6uSF98b6s?start=733" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In summary, the algorithm used by tens of thousands of people, which boasts 99.38%, simply cannot reliably recognize the faces of Asian people.

An MIT research team, investigating similar questions, took a stab at it; they ran hundreds of faces through some of the largest commercial facial recognition algorithms on the market[^3], finding some cases where white men are recognized with 34.4% more accuracy than women of color.

In fact, **_93.6%_** of errors were in recognizing the faces of people of color

# **_93.6%_**

In fact, this is sort of a crossover note, because our old friend bias is making a guest appearance! [The dataset used](http://vis-www.cs.umass.edu/lfw/) to train Sabrina's model was compiled from popular figures in the United States which, as one may expect, trained it better on European faces than Asian faces.

To the developers' credit, this fact is included in the instructions but is tucked away in a link in a footnote, meaning that many, like poor Sabrina above, may not even be aware of this.

### Takeaways

- Don't build a monolith.
- Always remember those who aren't in the room.

[^1]: [ABI Milestone report](https://www.ntia.doc.gov/files/ntia/publications/american_broadband_initiative_milestones_report.pdf)
[^2]: [Zippia](https://www.zippia.com/software-engineer-jobs/demographics/)
[^3]: [MIT report](http://gendershades.org/overview.html)
