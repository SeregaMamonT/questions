export function listenQuery(query, callbacks) {
  query.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        const document = {
          id: change.doc.id,
          ...change.doc.data(),
        };

        switch (change.type) {
          case 'added':
            return callbacks.onAdded(document);
          case 'modified':
            return callbacks.onModified(document);
          case 'removed':
            return callbacks.onRemoved(document);
        }
      });
    },
    error => callbacks.onError(error));
}

export function readList(query) {
  return query.get().then(result => {
    console.log(result);
    return result;
  });
}

export function readSingle(query) {
  return query.get().then(result => {
    if (result.exists) {
      return {
        id: result.id,
        ...result.data(),
      };
    }
  });
}
