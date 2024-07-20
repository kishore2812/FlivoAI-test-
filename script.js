document.addEventListener('DOMContentLoaded', () => {
    const stacks = document.querySelectorAll('.stack');

    stacks.forEach(stack => {
        stack.addEventListener('click', () => {
            // If the clicked stack is already moved, remove the 'moved' class
            if (stack.classList.contains('moved')) {
                stack.classList.remove('moved');
            } else {
                // Remove the 'moved' class from all stacks
                stacks.forEach(s => s.classList.remove('moved'));

                // Add the 'moved' class to the clicked stack
                stack.classList.add('moved');
            }
        });
    });
});



