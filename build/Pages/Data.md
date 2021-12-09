## Now to some nitty gritty

I want to make sure to properly source my data.

Here I will lean on a the vast array of research on this topic already. As such, I used the dozens of authors' works in the [Advances in Computer Vision and Pattern Recognition](https://www.springer.com/series/4205) series, namely in [Domain Adaptation in Computer Vision Applications](https://link.springer.com/book/10.1007%2F978-3-319-58347-1) edited by Gabriela Csurka[^1].

It is...dense, to say the least.

### ⚠️ Warning: Computer Science Jargon ⚠️

> A network pre-trained on a dataset D is generally fine-tuned on a new dataset 𝐷′ when the final task is also tested on 𝐷′ . Thus the scheme (train,fine-tune, test) is (𝐷,𝐷′,𝐷′) . In our analysis we have instead a different condition: (𝐷,𝐷′,𝐷″) where 𝐷′ consists in a reduced amount of labeled data, while 𝐷″ is the test set extracted from a collection different from 𝐷′[1^]
>
> <center><img class="h-100" src="https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-3-319-58347-1_2/MediaObjects/420546_1_En_2_Fig10_HTML.gif"/></center>

But luckily I can just play some of the highlights for you.

<!-- <img class="h-60 float-right" src="https://static01.nyt.com/images/2020/06/24/business/24michigan-arrest1/24michigan-arrest1-superJumbo.jpg?quality=75&auto=webp"/> -->

Much of this series involves comparing and contrasting how different algorithms interact with different kinds and types of data.
One of the more intriguing findings was about bias in the data; that is when much of the training data is similar.

Say you want to train an algorithm to know what a dog is. Which dataset do you think would give you more information?

<center>
<img style ="width:45%" class="inline-block mr-0" src="Images/bad.jpg" alt="A grid of shark pictures, with a single dog in the center"/>

<img style ="width:45%" class="inline-block ml-0" src="Images/good.jpg"  alt="A grid of various animal pictures, as well as a single dog in the center"/>
</center>
The first set will get you really good at recognizing "Not shark". The second, though, actually provides the variety necessary to differentiate dog and not dog!

This is much of what's discussed, especially in "A Deeper Look at Dataset Bias".

The authors even noted that, while helpful, not even their most powerful methods could fully right the wrongs of data bias.[^2]

The reason this is so important is because underrepresented communities are often minorities, so an algorithm analyzing anything comparing people or anything of the sort would be a sham if it didn't account for bias.

Bias (unfortunately) really only targets those who already underrepresented, for the very fact of being so.

### Takeaways

<!-- 1. Total reliance on the technology emphasizes the frequency and consequences of inaccuracies
2. Sourcing and distributing the data and the model itself must be done with careful consideration -->

- Avoid and correct for dataset imbalances.

[^1]: [Domain Adaptation in Computer Vision Applications](https://link.springer.com/book/10.1007/978-3-319-58347-1)
[^2]: [A Deeper Look at Dataset Bias](https://link.springer.com/chapter/10.1007/978-3-319-58347-1_2)
