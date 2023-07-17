#include "lists.h"

int is_palindrome(listint_t **head)
{
    if (*head == NULL)
        return 0;

    listint_t *slow = *head;
    listint_t *fast = *head;
    listint_t *prev = NULL;

    // Move 'fast' pointer twice as fast as 'slow' pointer
    // When 'fast' reaches the end, 'slow' will be at the middle
    while (fast != NULL && fast->next != NULL)
    {
        fast = fast->next->next;
        prev = slow;
        slow = slow->next;
    }

    // If the length of the list is odd, move 'slow' one step further
    // to exclude the middle element from further processing
    if (fast != NULL)
    {
        prev = slow;
        slow = slow->next;
    }

    // 'prev' now points to the last node of the first half
    // Disconnect the first half from the second half
    prev->next = NULL;

    // Reverse the second half of the list
    listint_t *current = slow;
    listint_t *next = NULL;

    while (current != NULL)
    {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    // 'prev' now points to the new head of the reversed second half

    // Compare the elements of the first and second halves
    listint_t *ptr1 = *head;
    listint_t *ptr2 = prev;

    while (ptr1 != NULL && ptr2 != NULL)
    {
        if (ptr1->n != ptr2->n)
            return 0; // Not a palindrome

        ptr1 = ptr1->next;
        ptr2 = ptr2->next;
    }

    return 1; // a palindrome
}
