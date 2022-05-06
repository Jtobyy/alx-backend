#!/usr/bin/env python3
'''
Simple helper function
'''


def index_range(page: int, page_size: int) -> tuple:
    '''
    return a tuple of size two containing a start
    index and an end index corresponding to the range
    of indexes to return in a list for those particular
    pagination parameters.
    '''
    page_amount = page_size * page
    page_limit = page_amount - page_size
    return (page_limit, page_amount)
