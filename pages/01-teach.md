---
title: Teach Convolution
---
# Convolution

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachConvolution v-animattr height="90%"/>

</div>

---
title: Teach CNN
---
# Neural Network

::content::

<div class="flex-(~ col justify-center items-center) h-full pb-8">

<TeachCNN-norelu v-animattr width="95%"/>

</div>


---
title: Teach Detection
---
# Object Detection

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachDetection v-animattr height="90%"/>

</div>

---
title: Teach Training
---
# Training

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachTraining v-animattr height="90%"/>

</div>

---
title: Teach Statistics
clicks: 7
---
# Statistics

::content::

<div class="flex-(~ justify-center items-center) h-full pb-8">

<TeachStatistics v-animattr :start="3" height="90%" class="mt--4"/>

<div class="text-center flex-(~ col justify-between) h-[60%]">

<v-click at="0">

**Precision**  
*How many of the detected objects are correct?*

</v-click>

<v-click at="1">

**Recall**  
*How many correct objects are detected?*

</v-click>
<v-click at="6">

**Average Precision**  
*Area under the curve*

</v-click>

</div>

</div>

<v-click at="2">
<div v-click-hide="6" class="absolute w-[250px] bottom-2 right-[220px]">
    <TeachStatisticsExample v-animattr :start="4" />
</div>
</v-click>

---
title: Teach Conclusions
---
# Summary

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded py-1 mb-2" v-click>
How do neural networks detect objects?
</Block>

<v-clicks>

- Convolution filters find features
- Stack many convolutions to create a network
- Regress detection coordinates and confidences
- Train the model with many examples

</v-clicks>
</div>

<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we evaluate the detection performance?
</Block>

<v-clicks>

- Precision tells how many of the detections are correct
- Recall tells how many objects have been successfully detected
- Sweep the confidence to find an optimal precision-recall trade-off
- AP provides a single value to easily compare models

</v-clicks>
</div>
</div>

<style>
    ul {
        @apply text-2s ml-8;
    }
</style>